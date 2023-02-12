import { language } from '../constant/lang';

export const getTranslatedText = key => {
  key = key.toLowerCase();
  let currentLang = localStorage.getItem('current_language') || 'en';
  if (typeof language[key] == 'undefined') return key;
  return language[key][currentLang];
};

export const usdCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

export const vndCurrencyFormat = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
});

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function truncateText(text, maxLength, ellipsis = '…') {
  if (text?.length > maxLength) {
    return (
      text.substr(0, maxLength - ellipsis.length + 1).replace(/\s+\S*$/, '') +
      ellipsis
    );
  }

  return text;
}

export function dataURItoBlod(dataURI) {
  if (dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    return url;
  }
  return null;
}

const colors = [
  '#92D050',
  '#F62A05',
  '#1570C0',
  '#24B0F0',
  '#FCC024',
  '#7030A0'
];

export function colorBaseOnId(id) {
  return colors[id % colors.length];
}
