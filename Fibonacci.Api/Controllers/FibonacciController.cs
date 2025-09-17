using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Fibonacci.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FibonacciController : ControllerBase
{
    [HttpGet("{n}")]
    public ActionResult<long> Get(int n)
    {
        if (n < 0)
        {
            return BadRequest("Input cannot be negative.");
        }
        if (n > 1000) {
            return BadRequest("Input is too large.");
        }
        return Ok(CalculateFibo(n));
    }

    private long CalculateFibo(int n)
    {
        if (n == 0) return 1;

        // Use a list to store the sequence as we build it
        List<long> series = new List<long> { 1 }; // fibo(0) = 1

        for (int i = 1; i <= n; i++)
        {
            long term =
                (i - 1 >= 0 ? series[i - 1] : 0) +
                (i - 2 >= 0 ? series[i - 2] : 0) +
                (i - 4 >= 0 ? series[i - 4] : 0) +
                (i - 6 >= 0 ? series[i - 6] : 0);
            series.Add(term);
        }

        return series[n];
    }
}