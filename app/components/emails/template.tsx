import { 
  Mjml,  
  MjmlHead,
  MjmlPreview,
  MjmlTitle,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
} from 'mjml-react';

interface Props {
  title: string;
}

const EmailTemplate: React.FC<Props> = ({ title, children }) => {

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>
          {title}
        </MjmlTitle>
        <MjmlPreview>
          {title}
        </MjmlPreview>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection>
          <MjmlColumn>
            {children}
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}

export { EmailTemplate };