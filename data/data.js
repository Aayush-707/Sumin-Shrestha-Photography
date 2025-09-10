export function getHomeImages() {
    const allImages = [
        ...TravelImages,
        ...SocialEventsImages,
        ...WeddingImages,
        ...PersonalProjectsImages,
    ];

    for (let i = allImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
    }

    return allImages.slice(0, 50).map((image, index) => ({
        src: image.src,
        alt: `img${index + 1}`,
    }));
}

export const TravelImages = [
    { src: '/Travel/Travel (1).jpg', alt: 'img1' },
    { src: '/Travel/Travel (2).jpg', alt: 'img2' },
    { src: '/Travel/Travel (3).jpg', alt: 'img3' },
    { src: '/Travel/Travel (4).jpg', alt: 'img4' },
    { src: '/Travel/Travel (5).jpg', alt: 'img5' },
    { src: '/Travel/Travel (6).jpg', alt: 'img6' },
    { src: '/Travel/Travel (7).jpg', alt: 'img7' },
    { src: '/Travel/Travel (8).jpg', alt: 'img8' },
    { src: '/Travel/Travel (9).jpg', alt: 'img9' },
    { src: '/Travel/Travel (10).jpg', alt: 'img10' },
    { src: '/Travel/Travel (11).jpg', alt: 'img11' },
    { src: '/Travel/Travel (12).jpg', alt: 'img12' },
    { src: '/Travel/Travel (13).jpg', alt: 'img13' },
    { src: '/Travel/Travel (14).jpg', alt: 'img14' },
    { src: '/Travel/Travel (15).jpg', alt: 'img15' },
    { src: '/Travel/Travel (16).jpg', alt: 'img16' },
    { src: '/Travel/Travel (17).jpg', alt: 'img17' },
    { src: '/Travel/Travel (18).jpg', alt: 'img18' },
    { src: '/Travel/Travel (19).jpg', alt: 'img19' },
    { src: '/Travel/Travel (20).jpg', alt: 'img20' },
];

export const SocialEventsImages = [
    { src: '/SocialEvents/SocialEvents (1).jpg', alt: 'img1' },
    { src: '/SocialEvents/SocialEvents (2).jpg', alt: 'img2' },
    { src: '/SocialEvents/SocialEvents (3).jpg', alt: 'img3' },
    { src: '/SocialEvents/SocialEvents (4).jpg', alt: 'img4' },
    { src: '/SocialEvents/SocialEvents (5).jpg', alt: 'img5' },
    { src: '/SocialEvents/SocialEvents (6).jpg', alt: 'img6' },
    { src: '/SocialEvents/SocialEvents (7).jpg', alt: 'img7' },
    { src: '/SocialEvents/SocialEvents (8).jpg', alt: 'img8' },
    { src: '/SocialEvents/SocialEvents (9).jpg', alt: 'img9' },
    { src: '/SocialEvents/SocialEvents (10).jpg', alt: 'img10' },
    { src: '/SocialEvents/SocialEvents (11).jpg', alt: 'img11' },
    { src: '/SocialEvents/SocialEvents (12).jpg', alt: 'img12' },
    { src: '/SocialEvents/SocialEvents (13).jpg', alt: 'img13' },
    { src: '/SocialEvents/SocialEvents (14).jpg', alt: 'img14' },
    { src: '/SocialEvents/SocialEvents (15).jpg', alt: 'img15' },
    { src: '/SocialEvents/SocialEvents (16).jpg', alt: 'img16' },
    { src: '/SocialEvents/SocialEvents (17).jpg', alt: 'img17' },
    { src: '/SocialEvents/SocialEvents (18).jpg', alt: 'img18' },
    { src: '/SocialEvents/SocialEvents (19).jpg', alt: 'img19' },
    { src: '/SocialEvents/SocialEvents (20).jpg', alt: 'img20' },
];

export const WeddingImages = [
    { src: '/Wedding/Wedding (1).jpg', alt: 'img1' },
    { src: '/Wedding/Wedding (2).jpg', alt: 'img2' },
    { src: '/Wedding/Wedding (3).jpg', alt: 'img3' },
    { src: '/Wedding/Wedding (4).jpg', alt: 'img4' },
    { src: '/Wedding/Wedding (5).jpg', alt: 'img5' },
    { src: '/Wedding/Wedding (6).jpg', alt: 'img6' },
    { src: '/Wedding/Wedding (7).jpg', alt: 'img7' },
    { src: '/Wedding/Wedding (8).jpg', alt: 'img8' },
    { src: '/Wedding/Wedding (9).jpg', alt: 'img9' },
    { src: '/Wedding/Wedding (10).jpg', alt: 'img10' },
    { src: '/Wedding/Wedding (11).jpg', alt: 'img11' },
    { src: '/Wedding/Wedding (12).jpg', alt: 'img12' },
    { src: '/Wedding/Wedding (13).jpg', alt: 'img13' },
    { src: '/Wedding/Wedding (14).jpg', alt: 'img14' },
    { src: '/Wedding/Wedding (15).jpg', alt: 'img15' },
    { src: '/Wedding/Wedding (16).jpg', alt: 'img16' },
    { src: '/Wedding/Wedding (17).jpg', alt: 'img17' },
    { src: '/Wedding/Wedding (18).jpg', alt: 'img18' },
    { src: '/Wedding/Wedding (19).jpg', alt: 'img19' },
    { src: '/Wedding/Wedding (20).jpg', alt: 'img20' },
];

export const PersonalProjectsImages = [
    { src: '/PersonalProjects/PersonalProjects (1).jpg', alt: 'img1' },
    { src: '/PersonalProjects/PersonalProjects (2).jpg', alt: 'img2' },
    { src: '/PersonalProjects/PersonalProjects (3).jpg', alt: 'img3' },
    { src: '/PersonalProjects/PersonalProjects (4).jpg', alt: 'img4' },
    { src: '/PersonalProjects/PersonalProjects (5).jpg', alt: 'img5' },
    { src: '/PersonalProjects/PersonalProjects (6).jpg', alt: 'img6' },
    { src: '/PersonalProjects/PersonalProjects (7).jpg', alt: 'img7' },
    { src: '/PersonalProjects/PersonalProjects (8).jpg', alt: 'img8' },
    { src: '/PersonalProjects/PersonalProjects (9).jpg', alt: 'img9' },
    { src: '/PersonalProjects/PersonalProjects (10).jpg', alt: 'img10' },
    { src: '/PersonalProjects/PersonalProjects (11).jpg', alt: 'img11' },
    { src: '/PersonalProjects/PersonalProjects (12).jpg', alt: 'img12' },
    { src: '/PersonalProjects/PersonalProjects (13).jpg', alt: 'img13' },
    { src: '/PersonalProjects/PersonalProjects (14).jpg', alt: 'img14' },
    { src: '/PersonalProjects/PersonalProjects (15).jpg', alt: 'img15' },
    { src: '/PersonalProjects/PersonalProjects (16).jpg', alt: 'img16' },
    { src: '/PersonalProjects/PersonalProjects (17).jpg', alt: 'img17' },
    { src: '/PersonalProjects/PersonalProjects (18).jpg', alt: 'img18' },
    { src: '/PersonalProjects/PersonalProjects (19).jpg', alt: 'img19' },
    { src: '/PersonalProjects/PersonalProjects (20).jpg', alt: 'img20' },
];
