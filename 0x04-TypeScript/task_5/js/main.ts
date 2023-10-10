interface MajorCredits {
  credits: number & { brand: 'MajorCredits' };
}

interface MinorCredits {
  credits: number & { brand: 'MinorCredits' };
}

function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MajorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}