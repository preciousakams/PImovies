/**
 * @jest-environment jsdom
 */

describe('counts the numbers of likes per item_id', () => {
  it('counts the numbers of likes per item_id', () => {
    const likeAll = [
      {
        likes: 2,
        item_id: '3245',
      },
      {
        likes: 1,
        item_id: '3246',
      },
      {
        likes: 1,
        item_id: '3247',
      },
      {
        likes: 7,
        item_id: '44790',
      },
    ];
    const setLikeCounter = () => {
      const id = '44790';
      const testId2 = '3245';
      if (id === likeAll[3].item_id) {
        const currentLikeData = likeAll[3].likes;
        expect(currentLikeData).toBe(7);
      }
      if (testId2 === likeAll[0].item_id) {
        const currentLikeData = likeAll[0].likes;
        expect(currentLikeData).toBe(2);
      }
    };
    setLikeCounter();
  });
});