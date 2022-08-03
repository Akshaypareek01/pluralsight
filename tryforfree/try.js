const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");


faqHeaders.forEach((header, i)=>{
    header.addEventListener("click", ()=>{
        header.nextElementSibling.classList.toggle("active");
    });
});
