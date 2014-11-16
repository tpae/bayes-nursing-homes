
define([
  'underscore'
], function(_) {

  function Query(query) {
    this.query = query;

    this.queries = [];

    if (this.query) {
      this.queries = this.parse(this.query);
    }

    return this;
  };

  Query.prototype.push = function(key) {
    // look for dupes
    var dupe = _.findWhere(this.queries, { key: key });

    if (!dupe) {
      this.queries.push(this.component(key));

      this.update();
    }
    return this;
  };

  Query.prototype.remove = function(key) {
    var component = this.component(key);

    this.queries = _.without(this.queries, _.findWhere(this.queries, { key: component.key }));
    
    this.update();

    return this;
  };

  Query.prototype.update = function() {
    var keys = this.get();

    window.location.hash = keys;
  };

  Query.prototype.get = function() {
    var keys = _.pluck(this.queries, 'key');

    return keys.join(';');
  };

  Query.prototype.set = function(query) {
    if (query) {
      this.query = query;
      this.queries = this.parse();
    } else {
      this.queries = [];
    }

    this.update();

    return this.queries;
  };

  Query.prototype.parse = function() {
    var components = this.query.split(';');

    var results = [];
    for(var i = 0; i < components.length; i++) {
      results.push(this.component(components[i]));
    }

    return results;
  };

  Query.prototype.component = function(key) {
    var component = key.split(':');

    return { key: key, type: component[0], name: component[1] };
  };

  return Query;
});