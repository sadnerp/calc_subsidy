function SettingsController($scope) {
  $scope.name = "John Smith";
  $scope.contacts = [
    {type:'phone', value:'111'},
    {type:'phone', value:'1121'},
  ];
 
  $scope.greet = function() {
   alert(this.name);
  };
 
  $scope.addContact = function() {
   this.contacts.push({type:'email', value:'yourname@example.org'});
  };
 
  $scope.removeContact = function(contactToRemove) {
   var index = this.contacts.indexOf(contactToRemove);
   this.contacts.splice(index, 1);
  };
 
  $scope.clearContact = function(contact) {
   $scope.contacts = [];
  };
}