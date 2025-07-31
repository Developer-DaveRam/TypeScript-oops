// getGodDetails.ts

import wiki from 'wikijs';

// #swagger.tags = ['god']

interface WikiSection {
  title: string;
  content(): Promise<string>;
  sections: WikiSection[];
}

interface GodDetails {
  Name: string;
  Basic_Details: string;
  History: string;
  Divine_Role: string;
  Symbolism: string;
  Stories_and_Legends: string;
  Other_Sections: Record<string, string>;
}

const sectionKeywords = {
  history: ['history', 'mythology'],
  role: ['role', 'function', 'belief', 'deity'],
  symbolism: ['symbol', 'attribute', 'representation'],
  stories: ['legend', 'story', 'narrative', 'myth']
};

const flatKeywords = Object.values(sectionKeywords).flat();

async function getSectionContent(sections: WikiSection[], keywords: string[]): Promise<string> {
  for (const section of sections) {
    if (keywords.some(k => section.title.toLowerCase().includes(k.toLowerCase()))) {
      return await section.content();
    }
    if (section.sections && section.sections.length > 0) {
      const subResult = await getSectionContent(section.sections, keywords);
      if (subResult !== 'Not available') return subResult;
    }
  }
  return 'Not available';
}

export async function getGodDetails(godName: string): Promise<GodDetails | null> {
  try {
    const page = await wiki().page(godName) as any; // Type workaround
    const summary = await page.summary();
    const sections: WikiSection[] = await page.sections();

    const history = await getSectionContent(sections, sectionKeywords.history);
    const role = await getSectionContent(sections, sectionKeywords.role);
    const symbolism = await getSectionContent(sections, sectionKeywords.symbolism);
    const stories = await getSectionContent(sections, sectionKeywords.stories);

    const otherSections: Record<string, string> = {};

    async function extractOtherSections(sections: WikiSection[]) {
      for (const section of sections) {
        const title = section.title.toLowerCase();
        const isKnown = flatKeywords.some(k => title.includes(k));
        const content = await section.content();
        if (!isKnown && content.trim().length > 20) {
          otherSections[section.title] = content;
        }

        if (section.sections && section.sections.length > 0) {
          await extractOtherSections(section.sections);
        }
      }
    }

    await extractOtherSections(sections);

    const data: GodDetails = {
      Name: godName,
      Basic_Details: summary,
      History: history,
      Divine_Role: role,
      Symbolism: symbolism,
      Stories_and_Legends: stories,
      Other_Sections: otherSections
    };

    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (err: any) {
    console.error(`Failed to get details for ${godName}:`, err.message);
    return null;
  }
}

// Example usage (remove or comment out in API usage)
getGodDetails("Shiva");
