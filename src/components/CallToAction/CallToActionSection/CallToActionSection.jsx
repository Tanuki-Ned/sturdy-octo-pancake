import CTAContent from '../CallToActionContent/CalltoActionContent';
import '../CallToActionSection/CallToActionSection.scss';

//Define CTA Section with props-titles, description and onButtonclick.
const CTASection = ({ title, description, onButtonClick }) => (
  <section className="cta-section">
    <CTAContent
      title={title}
      description={description}
      onButtonClick={onButtonClick}
    />
  </section>
);

export default CTASection;