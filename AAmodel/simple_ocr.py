from flask import Flask, request, jsonify
from PIL import Image
import pytesseract
import cv2
import numpy as np
import os
import firebase_admin
from firebase_admin import credentials, firestore
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Firebase Admin SDK
cred = credentials.Certificate(r"D:\year3\A-individual project\final-year-project\login-c057b-firebase-adminsdk-yiql7-bb06c12b37.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Update the path below to where Tesseract is installed on your system
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']
    image_bytes = image.read()

    # Process the image using OCR
    ocr_result = process_image(image_bytes)

    # Send OCR result to Firebase
    doc_ref = db.collection(u'ocr_results').document(image.filename)
    doc_ref.set({
        u'text': ocr_result
    })

    return jsonify({'text': ocr_result})

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
