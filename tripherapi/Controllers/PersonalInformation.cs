using Microsoft.AspNetCore.Mvc;
using tripherapi.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace tripherapi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PersonalInfoController : ControllerBase
	{
		private readonly AppDbContext _context;

		public PersonalInfoController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/PersonalInfo
		[HttpGet]
		public async Task<ActionResult<IEnumerable<PersonalInfo>>> GetPersonalInfos()
		{
			return await _context.PersonalInfos.ToListAsync();
		}

		// GET: api/PersonalInfo/{id}
		[HttpGet("{id}")]
		public async Task<ActionResult<PersonalInfo>> GetPersonalInfo(int id)
		{
			var personalInfo = await _context.PersonalInfos.FindAsync(id);

			if (personalInfo == null)
			{
				return NotFound();
			}

			return personalInfo;
		}

		// POST: api/PersonalInfo
		[HttpPost]
		public async Task<ActionResult<PersonalInfo>> CreatePersonalInfo(PersonalInfo personalInfo)
		{
			_context.PersonalInfos.Add(personalInfo);
			await _context.SaveChangesAsync();

			return CreatedAtAction(nameof(GetPersonalInfo), new { id = personalInfo.PersonalId }, personalInfo);
		}

		// PUT: api/PersonalInfo/{id}
		[HttpPut("{id}")]
		public async Task<IActionResult> UpdatePersonalInfo(int id, PersonalInfo personalInfo)
		{
			if (id != personalInfo.PersonalId)
			{
				return BadRequest("ID mismatch");
			}

			_context.Entry(personalInfo).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!PersonalInfoExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// DELETE: api/PersonalInfo/{id}
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeletePersonalInfo(int id)
		{
			var personalInfo = await _context.PersonalInfos.FindAsync(id);
			if (personalInfo == null)
			{
				return NotFound();
			}

			_context.PersonalInfos.Remove(personalInfo);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool PersonalInfoExists(int id)
		{
			return _context.PersonalInfos.Any(e => e.PersonalId == id);
		}
	}
}
