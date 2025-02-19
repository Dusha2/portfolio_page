function downloadFile() {
    const link = document.createElement('a');
    link.href = '/portfolio_page/assets/cv.jpg';
    link.download = 'cv.jpg'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}