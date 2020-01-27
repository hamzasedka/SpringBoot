module.exports = {
  name: 'data-ngrx-data',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/data/ngrx-data',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
