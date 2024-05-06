from PIL import Image
import pytesseract
import cv2
import numpy as np
import os
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate(r"D:\year3\A-individual project\final-year-project\login-c057b-firebase-adminsdk-yiql7-bb06c12b37.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Update the path below to where Tesseract is installed on your system
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Directory containing images
image_dir = r"D:\year3\A-individual project\AAmodel"

# Loop through all images in the directory
for filename in os.listdir(image_dir):
    if filename.endswith(".jpg"):  # Add or modify if you have different formats
        image_path = os.path.join(image_dir, filename)
        image = Image.open(image_path)

        # Convert PIL Image to a format OpenCV can work with
        image_cv = np.array(image)

        # Preprocess the image
        # Convert to grayscale
        gray = cv2.cvtColor(image_cv, cv2.COLOR_BGR2GRAY)

        # Apply thresholding
        _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

        # Convert back to PIL Image to use with pytesseract
        image_for_ocr = Image.fromarray(thresh)

        # Use Tesseract to do OCR on the preprocessed image
        text = pytesseract.image_to_string(image_for_ocr)

        print(f"OCR result for {filename}:\n{text}\n")
        print("------------------------------------------------------\n")

        # Send OCR result to Firebase
        doc_ref = db.collection(u'ocr_results').document(filename)
        doc_ref.set({
            u'text': text
        })