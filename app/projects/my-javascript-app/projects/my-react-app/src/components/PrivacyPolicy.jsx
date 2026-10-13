import React from 'react'

const PrivacyPolicy = () => {
  return (
<section ${seoSection(`privacyPolicy`)} style="background: var(--bg-primary); color: (--txt-secondary);" class=" info-section">
<div class="container-md">
<div class="row">

<div class="row">
<h1 ${seoH(`privacyPolicy`)}>
Privacy Policy <span class="d-none"> | Hassan Biswas — UI/UX &amp; Front-End Architecture </span>
</h1>
<p>
<b>Last Updated</b>:  <mark>Jan 01, ${new Date().getFullYear()}</mark>
</p>

<p>
As a Web Developer, I value your privacy and am committed to protecting any personal information you share with me.
</p>
</div>


<ol class="row">
<li>
<h2>
Information I Collect
</h2>
<p>
I may collect the following types of information:
</p>
<ul>
<li>
<strong>
                                      Contact Data:

</strong>
Name, email and phone number.
</li>
<li>
<strong>
Technical Data:
</strong>
IP address, browser type, and usage patterns collected via cookies or analytics tools.
</li>
<li>
<strong>
Project Data:
</strong>
Information regarding your website requirements and design preferences.
 </li>
 </ul>
 </li>


<li>
 <h2>
How I Use Your Information
 </h2>
<p>
The information collected is used to:
 </p>
<ul>
 <li>
Provide and improve services.
</li>
<li>
 Communicate with regarding project inquiries or updates.
 </li>
 <li>
Analyze website performance to enhance user experience.
</li>
 </ul>
</li>

<li>
<h2>
Third-Party Services
</h2>
<p>
 I do not sell or trade your personal information. However, if website is hosted on GitHub Pages, which may collect server logs. Also use tools like Google Analytics to monitor traffic.
</p>
    </li>


    <li>
      <h2>
        Your Rights
      </h2>
      <p>
        You have the right to request access to the personal data I hold about you, or to request that I delete any personal information by contacting me directly.
      </p>
    </li>


    <li>
      <h2>
        Contact Me
      </h2>
      <p>
        If you have any questions about this Privacy Policy, please contact me.
      </p>
    </li>

  </ol>

              </div>

</div>
      </section>

  )
}

export default PrivacyPolicy
