const RANKS = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
const INITIAL_PROGRESS_RANK = 0;
const PROGRESS_TOP_RANK = 100;

function calculatePoints(userRank, activityRank) {
  let points = 0;

  if (activityRank === userRank) {
    points += 3;
  } else if (activityRank === userRank - 1) {
    points += 1;
  } else if (activityRank > userRank) {
    const difference = userRank - activityRank;
    points += 10 * difference * difference; // Rank progression calculation
  }

  return points;
}

class User {
  constructor(name) {
    this.name = name;
    this.progress = INITIAL_PROGRESS_RANK;
    this.rank = RANKS[0];
  }

  incrementProgress(activityRank) {
    this.progress = this.progress + calculatePoints(this.rank, activityRank);

    if (this.progress >= PROGRESS_TOP_RANK) {
      this.rank = RANKS[RANKS.length - 1];
    } else {
      this.rank = RANKS.find((rank) => this.progress < rank);
    }
  }
}

const user = new User('Eldrige');
console.log(user.rank); // -8
console.log(user.progress); // 0
user.incrementProgress(-4);
console.log(user.progress); // 10
