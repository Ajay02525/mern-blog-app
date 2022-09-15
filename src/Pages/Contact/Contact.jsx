import "./contact.css"

function Contact() {

  return (
    <div >
      <h1 className="contactPageTitle">Feel free to Contact</h1>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.2294020463337!2d72.75656908430085!3d19.778135304910524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f7ac109bc3b%3A0x9051ddb1422b5a4a!2sHari%20OM%20park!5e0!3m2!1sen!2sin!4v1663167122777!5m2!1sen!2sin"
       width="100%" 
       height="450"
       style={{border:0}}
        allowFullScreen="" 
        loading="lazy"
        title="map"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="container">
        <div className="contact_form">
            <form action="https://formspree.io/f/xqkjpkpe" method="POST">
                <input type="text" name="username" 
                placeholder="username" autoComplete="off"
                required />
                <input type="text" name="email" 
                placeholder="email" autoComplete="off"
                required />
                <textarea name="message" id="" cols="21" rows="4"
                autoComplete="off" placeholder="MESSAGE"
                required></textarea>
                <button type="submit" >Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
