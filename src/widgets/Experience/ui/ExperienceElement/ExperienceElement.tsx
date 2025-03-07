import cn from 'classnames';
import { Exp } from '@/shared/lib/types';
import { TextEmpty, TextParagraph } from '@/shared/ui';
import { ExperienceContainer } from '../ExperienceContainer';
import { ExperienceTextContainer } from '../ExperienceTextContainer';
import { ExperienceTitle } from '../ExperienceTitle';

interface ExperienceElementProps {
  exp: Exp;
  className?: string;
}

export function ExperienceElement({ exp, className }: Readonly<ExperienceElementProps>) {
  const textElements = exp.text.map((str, index) => {
    if (!str) {
      return (
        <li key={str + index}>
          <TextEmpty />
        </li>
      );
    } else {
      return (
        <li key={str}>
          <TextParagraph marker={!exp.noMarker?.includes(index)}>{str}</TextParagraph>
        </li>
      );
    }
  });

  return (
    <ExperienceContainer className={cn(className)}>
      <ExperienceTitle title={exp.title} icon={exp.icon} date={exp.date} />
      <ExperienceTextContainer>{textElements}</ExperienceTextContainer>
    </ExperienceContainer>
  );
}
