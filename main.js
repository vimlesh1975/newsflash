let data2 = [
    '1 मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा ',
    '2 दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    '3 चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    '4 मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?'
];


document.addEventListener('DOMContentLoaded', function () {

    project.ready.then(() => {
        sheet.sequence.position = 0;
        updatestring('id_310', data2[0]);
        sheet.sequence.play();

        let i = 1;
        setInterval(() => {
            sheet.sequence.position = 0;
            updatestring('id_310', data2[i]);
            sheet.sequence.play();
            i = i + 1;
            if (i >= data2.length) {
                i = 0;
            }
        }, 7000);
    });
})
