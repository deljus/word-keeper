import { Groups } from '../core/constants';

export interface RequestData {
  word: string;
  score: number;
  defs?: string[];
}

interface SerrializeData {
  id: string;
  word: string;
  partsOfSpeech: string;
  description: string;
  selected: boolean;
}

enum RequestGroups {
  VERB = 'v',
  NOUN = 'n',
  ADJECTIVE = 'adj',
  ADVERB = 'adv',
}

export const serializeResponse = (rData: RequestData[]): SerrializeData[] => {
  const serrializeData: SerrializeData[] = [];

  rData.forEach((item) => {
    const { word, defs } = item;

    const RequestGroupsKeys: (keyof typeof RequestGroups)[] = <
      (keyof typeof RequestGroups)[]
    >Object.keys(RequestGroups);
    RequestGroupsKeys.forEach((group) => {
      const uniqKey = `${word}-${RequestGroups[group]}`;
      const buf = {
        id: uniqKey,
        word,
        partsOfSpeech: Groups[group],
        description: '',
        selected: false,
      };

      if (!defs) return;
      defs.forEach((description: string) => {
        if (description.startsWith(RequestGroups[group])) {
          buf.description = buf.description.concat(
            description.slice(RequestGroups[group].length),
            ';'
          );
        }
      });

      if (buf.description) {
        serrializeData.push(buf);
      }
    });
  });

  return serrializeData;
};
