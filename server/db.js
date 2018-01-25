var faker = require('faker');
var _ = require('lodash');

module.exports = function() {
  var data = {
    jobs: []
  };
  //jobs
  data.jobs = [
    {
      id: 1,
      title: 'Founder',
      description: 'Founder',
      category: '1'
    },
    {
      id: 2,
      title: 'Co-Founder',
      description: 'Co-Founder',
      category: '1'
    },
    {
      id: 3,
      title: 'CEO',
      description: 'CEO',
      category: '2'
    },
    {
      id: 4,
      title: 'CTO',
      description: 'CTO',
      category: '3'
    },
    {
      id: 5,
      title: 'Project Manager',
      description: 'Project Manager',
      category: '4'
    },
    {
      id: 6,
      title: 'Lead Developer',
      description: 'Lead Developer',
      category: '5'
    },
  ]

  return data;
}();
