function SettingsController($scope) {
	$scope.average = 0;
	$scope.peoples = [
		{type:'meat', income: {month1:0, month2:0, month3:0, month4:0, month5:0, month6:0}}
	];

	/**
	 * @method change - пересчитывает среднедушевой доход при изменении формы
	 * @return (float) - среднедушевой доход семьи в рублях
	 *
	 * @todo - mb повесить на инпаты он кейап вместо change?
	 */
	$scope.change = function() {

		// при каждом изменении формы доходов - обнуляется и пересчитывается среднедушевой доход
		$scope.average = 0;
		
		// цикл по членам семьи
		angular.forEach($scope.peoples, function(people, key) {
			
			/**
			 * Сначала вычисляется сумма доходов человека за полугодие
			 * Далее, среднее за пол года от этой суммы плюсуется в $scope.average
			 * После подсчета средних доходов всех членов семьи, 
			 * $scope.average делится на кол-во членов семьи
			 */			
			var average_people = 0;

			angular.forEach(people.income, function(income, month) {
				average_people += isNaN(parseFloat(income)) ? 0 : parseFloat(income);
			});

			$scope.average += average_people / 6;
		}); 

		$scope.average = $scope.average / $scope.peoples.length;
	};

	$scope.greet = function() {
		alert(this.name);
	};

	$scope.addContact = function() {
		this.peoples.push({type:'meat', income: {month1:0, month2:0, month3:0, month4:0, month5:0, month6:0}});

	};

	$scope.removeContact = function(contactToRemove) {
		if ($scope.peoples.length > 1) {
			var index = this.peoples.indexOf(contactToRemove);
			this.peoples.splice(index, 1);
		}
	};

	$scope.clearContact = function(contact) {
		$scope.peoples = [
			{type:'meat', income: {month1:0, month2:0, month3:0, month4:0, month5:0, month6:0}}
		];
	};
}