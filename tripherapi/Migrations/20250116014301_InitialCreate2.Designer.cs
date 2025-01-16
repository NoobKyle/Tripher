﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using tripherapi.Data;

#nullable disable

namespace tripherapi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250116014301_InitialCreate2")]
    partial class InitialCreate2
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("tripherapi.Data.PersonalInfo", b =>
                {
                    b.Property<int>("PersonalId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("personalid");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("PersonalId"));

                    b.Property<string>("CurrentAddress")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("currentaddress");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("dateofbirth");

                    b.Property<string>("DriversLicense")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("driverslicense");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("email");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("gender");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.Property<string>("PassportNumber")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("passportnumber");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("phonenumber");

                    b.Property<string>("PreviousAddress")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("previousaddress");

                    b.Property<string>("SSN")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("ssn");

                    b.Property<string>("TIN")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("tin");

                    b.HasKey("PersonalId");

                    b.ToTable("personalinformation", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
