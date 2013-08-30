<?php

class fsapi	{

	/**
	 * @var (float) $monthly_payment
	 * Полный размер платы за жилье и коммунальные услуги
	 */
	public $monthly_payment;

	/**
	 * @var (int) $size_of_family
	 * Общее кол-во членов семьи
	 */
	public $size_of_family;

	/**
	 * @var (int) $childrens
	 * Кол-во детей в семье
	 */
	public $childrens;

	/**
	 * @var (int) $pensioners
	 * Кол-во пенсионеров в семье
	 */
	public $pensioners;

	/**
	 * @var (int) $employers
	 * Кол-во трудоспособных членов семьи
	 */
	public $employers;

	/**
	 * Размер регионального стандарта стоимости жилищно-коммунальных услуг (РССЖКУ) с 01.09.2012г.
	 *
	 * @param (int) $size_of_family
	 * Кол-во членов семьи. В зависимости от этого значения меняется размер стоимости услуг.
	 */
	private function standardCost($size_of_family) {

		switch ($size_of_family) {

			case 1:		return 2237.0;
			case 2:		return 1704.0;
			default:	return 1542.0;
		}
	}

	/**
	 * Региональный стандарт максимально допустимой доли расходов граждан
	 * на оплату жилого помещения и коммунальных услуг в совокупном доходе семьи
	 *
	 * @param (float) $profit  - доход
	 */
	private static function rateCost($profit) {

		switch ($profit) {

			case ($profit <= 3000)	: return 10;
			case ($profit <= 3500)	: return 15;
			case ($profit <= 4000)	: return 20;
							default	: return 22;
		}
	}

	/**
	 * @var (array=>float) $living_wage
	 * Прожиточный минимум
	 * для Самарской области за 4 квартал 2012г.
	 * Различается в зависимости от категории граждан
	 */
	public static $living_wage = array(
		'employers'		=> 7550.0,
		'pensioners'	=> 5425.0,
		'childrens'		=> 6553.0,
	);
}