import {
  Accordion as UIAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type AccordionDataType = {
  title: string;
  description: string;
};

export type AccordionProps = {
  data: AccordionDataType[];
};

const faq = [
  {
    title: 'Can you customize the template for me?',
    description:
      'Small customizations can be done for free, major ones or full custom design with your ideas can be done with additional agreement.',
  },
  {
    title: 'Can you help me with launching template online?',
    description:
      'Yes. In case you have trouble with launching, hit me massage in X and I will help you.',
  },
  {
    title:
      'I like the structure of the site, but want to change colours. Could I?',
    description:
      'Yes. All colours used as a variables and can be easily changed for you style.',
  },
];

export const Accordion: React.FC<AccordionProps> = ({ data = faq }) => {
  return data.map((item, index) => (
    <UIAccordion key={index} type="single" collapsible className="w-full">
      <AccordionItem value={`item-${index + 1}`} className="border-neutral-700">
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent className="text-start">
          {item.description}
        </AccordionContent>
      </AccordionItem>
    </UIAccordion>
  ));
};
