const fs = require('fs').promises;
const fetch = require('node-fetch');
const nodemailer = require('nodemailer');

const cities =[
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
  ];

// ... (selectRandomCity and fetchTemperatureData functions)

async function sendEmail(cityName, temperature) {
  try {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kaoutar@gmail.com',
        pass: 'password123',
      },
    });

    // Email data
    const mailOptions = {
      from: 'kaoutar@gmail.com',
      to: 'recipient_email@example.com', // Replace with the recipient's email address
      subject: `Temperature in ${cityName}`,
      text: `The temperature in ${cityName} is ${temperature}°C.`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to recipient_email@example.com`);
  } catch (error) {
    throw error;
  }
}

async function main() {
  try {
    // ... (existing code)

    console.log(`Temperature for ${cityName} has been written to ${cityName}.txt`);

    // Send an email with the temperature information
    await sendEmail(cityName, temperature);
    console.log(`Email sent with temperature information.`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
