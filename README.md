# TravelNest
**A Modern Platform for Hotel Listings and Reviews**
---
## 🌟 About TravelNest
TravelNest is a web application designed to streamline hotel management and discovery. Currently, it allows hotel owners to register their properties and manage listings. Consumers can explore available hotels and leave reviews. Future updates will introduce consumer-focused features like hotel booking and personalized experiences.
---
## Website_link - https://travelnest-4yk1.onrender.com/listings
This website deployed on render.

## 🚀 Features
### For Hotel Owners:
- 🏨 **Register Hotels**: Add detailed hotel information including title, price, and image.
- 🖼️ **Image Upload**: Seamless integration with cloud storage for managing images.
- ✏️ **Edit Listings**: Update hotel details anytime.
- ❌ **Delete Listings**: Remove outdated or irrelevant hotels.

### For Consumers:
- 🔍 **Explore Hotels**: Browse a list of registered hotels.
- ⭐ **Leave Reviews**: Share your experience by posting reviews.
---

## 🛠️ Tech Stack
### Backend:
- **Node.js**
- **Express.js**

### Frontend:
- **EJS (Embedded JavaScript)**
- **Bootstrap**

### Database:
- **MongoDB**

### Cloud Storage:
- **Cloudinary** (for image storage)
---

## 📦 Dependencies
Below are the major libraries and packages used in this project:

- `express` - Backend framework for building server-side applications.
- `mongoose` - MongoDB object modeling for Node.js.
- `ejs` - Templating engine for dynamic HTML rendering.
- `connect-flash` - Flash messages for notifications.
- `express-session` - Session management middleware.
- `passport` - Authentication middleware.
- `passport-local` - Local authentication strategy.
- `multer` - Middleware for handling `multipart/form-data`, used for file uploads.
- `cloudinary` - Cloud service for image storage.
---

## ⚙️ Installation
Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SahilBrar1/TravelNest.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd TravelNest
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   MONGO_URI=<your-mongodb-uri>
   SESSION_SECRET=<your-session-secret>
   ```

5. **Run the application:**
   ```bash
   npm start
   ```

6. **Visit the app in your browser:**
   Navigate to `http://localhost:8080`

---

## 🖼️ Preview
### Homepage


### Hotel Listings


---

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Submit a pull request.

---

## 📝 Future Enhancements
- 🛒 Add consumer functionalities like booking and payment integration.
- 🔐 Implement advanced authentication and authorization.
- 📊 Add analytics dashboard for hotel owners.
- 🌐 Optimize for SEO and mobile devices.

---

## 📃 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## ✉️ Contact
For any queries or feedback, feel free to reach out:
- **Email:** sbrar7282@gmail.com
- **GitHub:** [SahilBrar1](https://github.com/SahilBrar1)

---

> Made with ❤️ by Sahil Brar
