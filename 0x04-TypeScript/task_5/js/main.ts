// task_5/js/main.ts

// MajorCredits interface with brand for nominal typing
interface MajorCredits {
  credits: number;
  _brand: 'major';
}

// MinorCredits interface with brand for nominal typing
interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

// Function to sum two MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'major' };
}

// Function to sum two MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'minor' };
}

// Example usage
const math: MajorCredits = { credits: 3, _brand: 'major' };
const physics: MajorCredits = { credits: 4, _brand: 'major' };

console.log(sumMajorCredits(math, physics)); // { credits: 7, _brand: 'major' }

const art: MinorCredits = { credits: 2, _brand: 'minor' };
const music: MinorCredits = { credits: 1, _brand: 'minor' };

console.log(sumMinorCredits(art, music)); // { credits: 3, _brand: 'minor' }
