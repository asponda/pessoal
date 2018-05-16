import { ContactSendMock } from '../app/pages/contact/services/contact-send.mock';
import { getSkillsMock } from '../app/pages/skills/services/mock/getSkills.mock';

export const mockData = {
  ['/mails/send'] : ContactSendMock,
  ['/skills']: getSkillsMock
};
