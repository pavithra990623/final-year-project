import os
from flask import Flask, request, jsonify
from PIL import Image
import pytesseract
import cv2
import numpy as np
import io
import firebase_admin
from firebase_admin import credentials, firestore
from flask_cors import CORS
import uuid
import magic  # Import magic for file type validation

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize Firebase Admin SDK
cred = credentials.Certificate(r"C:\Users\rasan\Downloads\login-c057b-firebase-adminsdk-yiql7-33d582380a.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Get Tesseract path from environment variable or use default value
TESSERACT_PATH = os.getenv('TESSERACT_PATH', r'C:\Program Files\Tesseract-OCR\tesseract.exe')
pytesseract.pytesseract.tesseract_cmd = TESSERACT_PATH

def parse_ocr_text(ocr_text):
    parsed_data = {}
    lines = ocr_text.split('\n')
    for line in lines:
        if line.strip().startswith('TOTAL WHITE CELL COUNT'):
            parsed_data['TOTAL_WHITE_CELL_COUNT'] = float(line.split()[-1])
        elif line.strip().startswith('NEUTROPHILS'):
            parsed_data['NEUTROPHILS'] = float(line.split()[-1])
        # Add more conditions to parse other data points as needed
    return parsed_data

@app.route('/upload', methods=['POST'])

def upload_image():
    # Check if request contains image file
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files.get('image')

    # Validate image file
    if not is_valid_image(image):
        return jsonify({'error': 'Invalid image file'}), 400

    image_bytes = image.read()

    # Process the image using OCR
    ocr_result = process_image(image_bytes)

    # Generate a unique ID for the Firestore document
    doc_id = str(uuid.uuid4())

    # Send OCR result to Firebase
    doc_ref = db.collection(u'ocr_results').document(doc_id)
    doc_ref.set({
        u'text': ocr_result
    })

    return jsonify({'doc_id': doc_id, 'text': ocr_result})

def is_valid_image(image):
    # Validate file type using magic
    mime_type = magic.from_buffer(image.stream.read(1024), mime=True)
    if mime_type.startswith('image'):
        return True
    return False

def process_image(image_bytes):
    # Convert image bytes to PIL Image
    image_pil = Image.open(io.BytesIO(image_bytes))

    # Convert PIL Image to a format OpenCV can work with
    image_cv = np.array(image_pil)

    # Preprocess the image
    # Convert to grayscale
    gray = cv2.cvtColor(image_cv, cv2.COLOR_BGR2GRAY)

    # Apply thresholding
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Convert back to PIL Image to use with pytesseract
    image_for_ocr = Image.fromarray(thresh)

    # Use Tesseract to do OCR on the preprocessed image
    text = pytesseract.image_to_string(image_for_ocr)

    return text

if __name__ == '__main__':
    app.run(debug=True)
