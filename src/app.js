window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    document.getElementById('title')  =parsedUrl.searchParams.get('title').value;
    document.getElementById('text')= parsedUrl.searchParams.get('text').value;
    document.getElementById('url')= parsedUrl.searchParams.get('url').value;
  });
