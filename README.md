#  Digital Business Card

A modern, responsive **digital business card** built with pure **HTML, CSS, and JavaScript**.

The card features a clean horizontal layout with a smooth **3D flip animation**, allowing users to display their personal information on the front and social links / QR code on the back.

---

##  Features

*  Horizontal business card design
*  Smooth 3D flip animation
*  Profile photo and personal information
*  Phone contact
*  Email contact
*  GitHub link
*  LinkedIn link
*  Instagram link
*  Portfolio / website section
*  QR code integration
*  Responsive design for mobile devices
*  No frameworks or dependencies
*  Clean and modern UI

---


##  Tech Stack

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| HTML5      | Page structure                 |
| CSS3       | Styling, layout & 3D animation |
| JavaScript | Card flip interaction          |
| QR Code    | Profile / contact sharing      |

No frameworks. No build tools. No complicated setup.

---

##  Project Structure

```text
digital-business-card/
│
├── index.html      # Main HTML structure
├── style.css       # Design and animations
└── README.md       # Project documentation
```

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/digital-business-card.git
```

### 2. Open the project

```bash
cd digital-business-card
```

### 3. Run it

Simply open:

```text
index.html

```

in your browser.

That's it. 

---

##  Customization

You can easily customize the card by editing `index.html`.

### Change the name

```html
<h1>Your Name</h1>
```

### Change the role

```html
<p class="role">
  Developer • Designer • Entrepreneur
</p>
```

### Change the profile image

```html
<img
  src="your-image.jpg"
  alt="Profile Photo"
  class="profile"
>
```

### Change the phone number

```html
<span> +91 XXXXXXXXXX</span>
```

### Change the email

```html
<span> your@email.com</span>
```

### Change social links

```html
<a href="https://github.com/yourusername">
  GitHub
</a>
```

---

##  Responsive Design

The card automatically adapts to different screen sizes.

 
##  How the Flip Works

The card uses CSS 3D transforms.

When the user clicks the card, JavaScript adds the `flipped` class:

```javascript
card.classList.toggle("flipped");
```

CSS then rotates the card:

```css
.card.flipped {
  transform: rotateY(180deg);
}
```

Both sides use:

```css
backface-visibility: hidden;
```

to create the realistic card-flipping effect.

---

##  Design

The design focuses on:

* Minimal interface
* Strong typography
* High readability
* Smooth animations
* Responsive layout
* Professional appearance
* Simple user interaction

---

##  Future Improvements

Possible future versions could include:

* [ ] Download contact as `.vcf`
* [ ] Dynamic QR code generation
* [ ] Share button
* [ ] Dark / light themes
* [ ] Multiple card themes
* [ ] Card customization panel
* [ ] Editable profile information
* [ ] Custom card URLs
* [ ] Analytics
* [ ] Social media icons
* [ ] Contact form
* [ ] PWA support
* [ ] Backend-powered card creation

---

##  Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add: your feature"
```

5. Push your branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

##  License

This project is open source and available under the **MIT License**.

---

##  Author

**Mhd Humraz**

Developer • Builder • Tech Enthusiast

---

 If you like this project, consider giving the repository a **star**!

 
