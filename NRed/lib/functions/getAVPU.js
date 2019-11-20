// name: getAVPU
// outputs: 1
 getAvpu: function(levelOfConsciousness) {
    switch (levelOfConsciousness) {
      case 'Alert':
        return 'at0005';

      case 'Voice':
        return 'at0006';

      case 'Pain':
        return 'at0007';

      case 'Unresponsive':
        return 'at0008';

      default:
        return 'Not known';
    }
  }
return msg;