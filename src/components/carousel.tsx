import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export type ImageMetadata = {
  src: string;
  format: string;
  height: number;
  width: number;
};

export type Images = {
  id: string;
  src: ImageMetadata;
};

export type CarouselProps = {
  images: Images[];
};

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <UICarousel>
      <CarouselContent>
        {images
          ? images.map((image) => {
              return (
                <CarouselItem key={image.id}>
                  <img src={image.src.src} />
                </CarouselItem>
              );
            })
          : null}
      </CarouselContent>
      <CarouselPrevious variant="ghost" />
      <CarouselNext variant="ghost" />
    </UICarousel>
  );
};
