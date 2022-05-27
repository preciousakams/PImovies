describe('counts the numbers of comment per item_id', () => {
  it('counts the numbers of comment per item_id', () => {
    const allComment = [
      {
        comment: 'This is nice!',
        username: 'Ishmael',
        item_id: 705,
      },
    ];
    const setCommentCounter = () => {
      const comment = 'This is nice!';
      const username = 'Ishmael';
      const itemId = 705;

      if (itemId === allComment[0].item_id) {
        const currentCommentData = allComment[0].comment;
        expect(currentCommentData).toBe(comment);

        const currentUsername = allComment[0].username;
        expect(currentUsername).toBe(username);
      }
    };
    setCommentCounter();
  });
});