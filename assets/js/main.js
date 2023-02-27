/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: #F5F5F5;
}

.course {
  background-color: lightblue;
  padding: 20px;
  border: 1px solid black;
  text-align: center;
}

.course img {
  display: block;
  margin: auto;
}

.course-name {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.description {
  font-size: 16px;
  margin-top: 10px;
}

a {
  color: #000000;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}


.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.about-container a {
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.about-container a:hover {
  background-color: rgba(0,0,0,0.5);
}

.subject-header {
  background-color: #ffffff;
  text-align: center;
  padding: 1rem 0;
}

.subject-header h2 {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2rem;
}

.subject-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.subject-box {
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.subject-box .description {
  text-align: center;
}


.subject-box:hover {
  transform: translateY(-10px);
}

.subject-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.subject-header h2 {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center; /* add this property */
  margin-bottom: 1rem; /* add this property */
}

.subject-header strong {
  font-weight: bold; /* add this property */
}


.subject-box .about-button {
  margin: 0.5rem;
  display: flex;
  justify-content: center;
}


.math {
  border-color: #000000;
}

.econ {
  border-color: #000000;
}

.physics {
  border-color: #000000;
}

.ece {
  border-color: #000000;
}

.chemistry {
  border-color: #000000;
}

footer {
  text-align: center;
  padding: 1rem;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-container p {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.empty-row {
  height: 50px;
}
