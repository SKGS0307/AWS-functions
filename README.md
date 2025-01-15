# AWS-functions
Go to README file to know how to run the code.

Instructions to Deploy and Run the Lambda Functions

You should have AWS account 

AWS Account
AWS CLI installed and configured (aws configure)
Node.js installed

1. How to run the 1st code follow the below instructions

Deploy the Add Two Numbers Lambda Function

Step 1: Go to the AWS Lambda Console.
Step 2: Click on Create Function → Author from Scratch.
Step 3: Enter function name (e.g., AddTwoNumbers) and select Node.js runtime.
Step 4: Paste the first function code.
Step 5: Deploy the function.

2. For the 2nd question follow the instruction given bellow
Deploy the PDF Upload Lambda Function

Step 1: Create a new Lambda function (e.g., UploadPDFtoS3) with Node.js runtime.
Step 2: Attach the AmazonS3FullAccess policy to the Lambda role.
Step 3: Replace 'your-s3-bucket-name' with your actual bucket name.
Step 4: Deploy the function.

after successfully uploading the document you will get 
{
  "message": "File uploaded successfully!"
}
this as output.

