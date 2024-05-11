from flask import Flask, request, jsonify, render_template
import os
import re
import json
from PIL import Image
import pytesseract
import cv2
import numpy as np
import firebase_admin
from firebase_admin import credentials, firestore
from flask_cors import CORS  # Import CORS from flask_cors

# Your existing code...
app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for your Flask app

# Initialize Firebase Admin SDK
cred = credentials.Certificate(r"config/login-c057b-firebase-adminsdk-yiql7-bb06c12b37.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Update the path below to where Tesseract is installed on your system
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Directory containing images
image_dir = r"images/"

def analyze_image(image_path):
    open_cv_image = cv2.imread(image_path)
    gray = cv2.cvtColor(open_cv_image, cv2.COLOR_BGR2GRAY)

    # Use Tesseract to do OCR on the preprocessed image
    text = pytesseract.image_to_string(gray)

    # Define regular expressions for extracting text and values
    regex = r'([A-Z\s]+)(\d+\.\d+)'
    matches = re.findall(regex, text)

    # Convert matches to JSON array
    image_data = [{"text": match[0].strip() if match[0].strip() else "no text", "value": match[1]} for match in matches]

    # Pass image_data array to Firestore document in test_collection
    doc_ref = db.collection(u'test_collection').document(os.path.basename(image_path))
    doc_ref.set({
        u'data': image_data,
    })

    return image_data

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if the POST request has the file part
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    # If the user does not select a file, the browser submits an empty file without a filename
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        filename = file.filename
        file_path = os.path.join('uploads', filename)
        file.save(file_path)

        # Now call the function to analyze the image
        image_data = analyze_image(file_path)

        if len(image_data) > 0:
            return jsonify({"message": "File uploaded successfully", "data": image_data}), 200
        else:
            return jsonify({"message": "No data"}), 400

@app.route('/chart', methods=['POST'])
def generate_chart():
    file = request.files['file']
    filename = file.filename
    file_path = os.path.join('images', filename)
    file.save(file_path)

    # Now call the function to analyze the image and generate chart data
    chart_data = analyze_image(file_path)

    return render_template('chart.html', chart_data=chart_data)

if __name__ == '__main__':
    app.run(debug=True)
