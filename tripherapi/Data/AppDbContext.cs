using Microsoft.EntityFrameworkCore;
using System;

namespace tripherapi.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

		public DbSet<PersonalInfo> PersonalInfos { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<PersonalInfo>().ToTable("personalinformation");
			modelBuilder.Entity<PersonalInfo>().HasKey(p => p.PersonalId);

			// Map properties to columns if names differ
			modelBuilder.Entity<PersonalInfo>().Property(p => p.PersonalId).HasColumnName("personalid");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.Name).HasColumnName("name");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.DateOfBirth).HasColumnName("dateofbirth");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.Gender).HasColumnName("gender");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.CurrentAddress).HasColumnName("currentaddress");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.PreviousAddress).HasColumnName("previousaddress");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.PhoneNumber).HasColumnName("phonenumber");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.Email).HasColumnName("email");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.SSN).HasColumnName("ssn");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.TIN).HasColumnName("tin");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.PassportNumber).HasColumnName("passportnumber");
			modelBuilder.Entity<PersonalInfo>().Property(p => p.DriversLicense).HasColumnName("driverslicense");
		}
	}

	public class PersonalInfo
	{
		private DateTime _dateOfBirth;

		public int PersonalId { get; set; }
		public string Name { get; set; }
		public DateTime DateOfBirth
		{
			get => _dateOfBirth;
			set => _dateOfBirth = DateTime.SpecifyKind(value, DateTimeKind.Utc);
		}
		public string Gender { get; set; }
		public string CurrentAddress { get; set; }
		public string PreviousAddress { get; set; }
		public string PhoneNumber { get; set; }
		public string Email { get; set; }
		public string SSN { get; set; }
		public string TIN { get; set; }
		public string PassportNumber { get; set; }
		public string DriversLicense { get; set; }
	}
}
