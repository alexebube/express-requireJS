module.exports = function(sequelize, DataTypes) {

	return sequelize.define('Users',
		{
			userID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			firstName:{
				type: DataTypes.STRING,
				allowNull: false
			},
			middleName:{
				type: DataTypes.STRING,
				allowNull: true
			},
			lastName:{
				type: DataTypes.STRING,
				allowNull: false
			},
			email:{
				type: DataTypes.STRING,
				allowNull: false
			},
			phoneNumber:{
				type: DataTypes.STRING,
				allowNull: true
			},
			streetAddress:{
				type: DataTypes.STRING,
				allowNull: false
			},
			city:{
				type: DataTypes.STRING,
				allowNull: false
			},
			state:{
				type: DataTypes.STRING,
				allowNull: false
			},
			zipCode:{
				type: DataTypes.INTEGER,
				allowNull: false
			},
			username:{
				type: DataTypes.STRING,
				allowNull: false
			},
			password:{
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			indexes: [{
				unique: true, 
				fields: ['email']
			}],
			timestamps: true,
			createdAt: 'createdOn',
			updatedAt: false
		}
	);
};
