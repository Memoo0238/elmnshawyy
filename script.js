// التحقق من وجود ملف قبل التحميل
function checkFile(link) {
    const href = link.getAttribute('href');
    fetch(href)
        .then(response => {
            if (!response.ok) {
                alert('الملف غير متوفر حاليًا');
                return false;
            }
        })
        .catch(() => {
            alert('حدث خطأ أثناء التحقق من الملف');
        });
}

// تحميل الملف الصوتي
function downloadAudio(src, title) {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// مشاركة التلاوة
function share(title) {
    if (navigator.share) {
        navigator.share({
            title: `تلاوة ${title} - الشيخ محمد صديق المنشاوي`,
            text: `استمع إلى تلاوة ${title} بصوت الشيخ محمد صديق المنشاوي`,
            url: window.location.href
        })
        .then(() => console.log('تمت المشاركة بنجاح'))
        .catch(error => console.log('خطأ في المشاركة:', error));
    } else {
        alert('ميزة المشاركة غير مدعومة في متصفحك');
    }
}

// زر العودة للأعلى
const backToTopBtn = document.getElementById('back-to-top');
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// التحقق من إرسال النموذج
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح!');
    this.reset();
});