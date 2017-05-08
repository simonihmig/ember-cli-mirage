import Helper, { states } from './_helper';
import { module, skip } from 'qunit';

module('Integration | ORM | Belongs To | Polymorphic | association #set', {
  beforeEach() {
    this.helper = new Helper();
  }
});

/*
  The model can update its association via parent, for all states
*/
states.forEach((state) => {

  skip(`a ${state} can update its association to a saved parent`, function(assert) {
    let [ post ] = this.helper[state]();
    let savedAuthor = this.helper.savedParent();

    post.author = savedAuthor;

    assert.equal(post.authorId, savedAuthor.id);
    assert.deepEqual(post.author, savedAuthor);
  });

  skip(`a ${state} can update its association to a new parent`, function(assert) {
    let [ post ] = this.helper[state]();
    let newAuthor = this.helper.newParent();

    post.author = newAuthor;

    assert.equal(post.authorId, null);
    assert.deepEqual(post.author, newAuthor);
  });

  skip(`a ${state} can update its association to a null parent`, function(assert) {
    let [ post ] = this.helper[state]();

    post.author = null;

    assert.equal(post.authorId, null);
    assert.deepEqual(post.author, null);
  });

});
