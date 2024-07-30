import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const Carousel = (props) => {
  const { images } = props;
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
        {/* <CarouselItem> */}
        {/*   <img src={Hero.src} /> */}
        {/* </CarouselItem> */}
        {/* <CarouselItem> */}
        {/*   <img src={HeroLight.src} /> */}
        {/* </CarouselItem> */}
        {/* <CarouselItem> */}
        {/*   <img src={Letter.src} /> */}
        {/* </CarouselItem> */}
        {/* <CarouselItem> */}
        {/*   <img src={About.src} /> */}
        {/* </CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious variant="ghost" />
      <CarouselNext variant="ghost" />
    </UICarousel>
  );
};
