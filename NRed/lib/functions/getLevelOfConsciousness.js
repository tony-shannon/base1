// name: getLevelOfConsciousness
// outputs: 1
  getLevelOfConsciousness: function(levelOfConsciousnessCode) {
    switch (levelOfConsciousnessCode) {
      case 'at0005':
        return 'Alert';

      case 'at0006':
        return 'Voice';

      case 'at0007':
        return 'Pain';

      case 'at0008':
        return 'Unresponsive';

      default:
        return 'Not known';
    }
  }
  
return msg;