export type GalleryPhoto = {
  src: string;
  alt: string;
};

// Small candid photos for the scattered polaroid pile in the Hero section.
// Add more by dropping a file into /public/images/gallery and listing it here.
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/gallery/mirror-selfie.jpg", alt: "Bella in a mirror selfie" },
  { src: "/images/gallery/overlook.jpg", alt: "Bella looking out over a coastal trail" },
  { src: "/images/gallery/cat.jpg", alt: "Bella's cat perched on her laptop" },
  { src: "/images/gallery/bay-sunset.jpg", alt: "Sunset over the San Francisco Bay" },
  { src: "/images/gallery/bouquet.jpg", alt: "Bella holding a bouquet of white flowers" },
  { src: "/images/gallery/instax.jpg", alt: "Scattered Instax photos with friends" },
  { src: "/images/gallery/jsm-products.jpg", alt: "JUNGSAEMMOOL beauty product lineup" },
];
