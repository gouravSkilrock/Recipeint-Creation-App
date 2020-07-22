# Recipeint-Creation-App
This is used for creation the recipient file for SMS,EMAIL,USSD,MMS channels for JOB TYPE 1,2 &amp; 3 for Ngage Product

# File will create in same folder inside recipient folder

# 'Email Job type 1': 

node CreateEmailRecipientFile.js <number of recipeient>

Ex : node CreateEmailRecipientFile.js 1000

# 'SMS Job type 1': 

node createMSISDNfile.js <number of recipeient>

Ex : node createMSISDNfile.js 1000

# 'SMS Job type 2': 

node createMSISDNFileJT-2.js <number of recipeient> <number of placeholder>

Ex : node createMSISDNFileJT-2.js 1000 2

# 'SMS Job type 3 Text': 

node createMSISDNFileJT-3-text.js <number of recipeient>

Ex : node createMSISDNFileJT-3-text.js 1000

# 'Example of the Files :'

 > recipientEmail-1K.txt
 > recipientMSISDN-1K.txt
 > recipientMSISDN-JT2-PH-1-1K.txt
 > recipientMSISDN-JT2-PH-2-1K.txt
 > recipientMSISDN-JT3-1K.txt




