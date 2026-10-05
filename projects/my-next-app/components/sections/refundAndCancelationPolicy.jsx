import React from 'react'

const RefundAndCancelationPolicy = () => {
  return (
<section ${seoSection(`refundAndCancelationPolicy`)} style="background: var(--bg-primary); color: (--txt-secondary);" class=" info-section">
 <div class="container-md">
<div class="row">

<div class="row">
 <h1 ${seoH(`refundAndCancelationPolicy`)}>
Refund &amp; Cancelation Policy <span class="d-none"> | Hassan Biswas — UI/UX &amp; Front-End Architecture </span>
 </h1>
<p>
<b>Last Updated</b>:  <mark>Jan 01, ${new Date().getFullYear()}</mark>
 </p>

<p>
Thank you for choosing my services
. I provide custom digital services, I want to ensure we have a clear understanding of our financial commitment before a project begins.
 </p>
 </div>


 <ol class="row">
 <li>
 <h2>
 Project Deposits
 </h2>
 <p>
 Most projects require an initial deposit (typically
 <b>
30% to 50%
</b>
) before work commences. This deposit secures your spot in my workflow and covers the initial research and architecture phase.
<strong>
 Deposits are non-refundable
 </strong>
                              once work has started.

 </p>
 </li>


 <li>
 <h2>
 Cancellation During Development
 </h2>
 <p>
 If a project is cancelled after development has begun but before completion, the client is responsible for payment for all work completed up to the date of cancellation.

  <ul>
 <li>
 If the work completed exceeds the deposit, an additional invoice will be issued.
</li>
 <li>
 If the work completed is less than the deposit, no refund of the deposit will be issued.
</li>
</ul>
</p>
</li>


<li>
<h2>
Final Delivery &amp; Acceptance
</h2>
<p>
Once the final files are delivered and the "Final Approval" is signed off by the client,
<strong>
 no refunds will be issued
 </strong>
 . Digital products cannot be "returned" in the traditional sense once the source code is in the client's possession.
 </p>
                      </li>


 <li>
 <h2>
 Revisions
 </h2>
<p>
To ensure satisfaction, I include a specific number of revision rounds (as stated in our initial contract). This allows us to fine-tune the design and functionality before final delivery.
</p>
</li>


<li>
<h2>
Questions &amp; Disputes | Contact Me
</h2>
<p>
I strive for 100% client satisfaction. If you are unhappy with the progress of your project, please contact me immediately so we can find a solution.
</p>
</li>

</ol>

</div>
</div>
</section>
  )
}

export default RefundAndCancelationPolicy
