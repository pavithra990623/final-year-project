import re
import json
from PIL import Image
import pytesseract
import cv2
import numpy as np
import os
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate(r"config/login-c057b-firebase-adminsdk-yiql7-bb06c12b37.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
  
# Update the path below to where Tesseract is installed on your system
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Directory containing images
image_dir = r"images/"

# Loop through all images in the directory

def analyzeImage(Images):
    image_path = os.path.join(image_dir, Images)
    openCvImage = cv2.imread(image_path)
    gray = cv2.cvtColor(openCvImage, cv2.COLOR_BGR2GRAY)

    # Use Tesseract to do OCR on the preprocessed image
    text = pytesseract.image_to_string(gray)

    # Define regular expressions for extracting text and values
    regex = r'([A-Z\s]+)(\d+\.\d+)'

    matches = re.findall(regex, text)

    # Convert matches to JSON array
    imageData = [{"text": match[0].strip() if match[0].strip() else "no text", "value": match[1]} for match in matches]

    # Convert to JSON string
    json_string = json.dumps(imageData, indent=4)

    print(json_string)    

    # Pass imageData array to Firestore document in test_collection
    doc_ref = db.collection(u'test_collection').document(Images)
    doc_ref.set({
        u'data': imageData,
    })

    return imageData

# analyzeImage("imx.png")