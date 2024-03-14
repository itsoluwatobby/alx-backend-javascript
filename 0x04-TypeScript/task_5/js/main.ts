interface MajorCredits {
  credits: number;
  max?: number;
}

interface MinorCredits {
  credits: number;
  min?: number
}

function sumMajorCredits(subject1, subject2): MajorCredits {
  const credit = subject1 + subject2;
  return { credit };
}

function sumMinorCredits(subject1, subject2): MinorCredits {                                 const credit = subject1 + subject2;
  return { credit };
}
