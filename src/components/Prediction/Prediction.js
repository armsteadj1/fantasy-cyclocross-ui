import React, { Component } from 'react';
import * as cheerio from 'cheerio';
import { Panel, Table } from 'react-bootstrap';

export class Prediction extends Component {
  prediction = cheerio.load(`
  197019:
<table width='100%' class='datatable' border='0' cellspacing='0' cellpadding='4'>
    <tr class='normalbold'>
        <th style='text-align:left'>Place</th>
        <th style='text-align:left'>Name</th>
        <th style='text-align:left'>Team</th>
        <th style='text-align:left'>City, State</th>
        <th style='text-align:left'>Points</th>
    </tr>
    <tr class='licensenormalmiddle'>
        <td>1</td>
        <td>Christopher Berge</td>
        <td>
            <span class='font-size:-1'></span>
        </td>
        <td>Madison, WI</td>
        <td>167.18</td>
    </tr>
    <tr class='licensenormalmiddle'>
        <td>2</td>
        <td>PJ Braun</td>
        <td>
            <span class='font-size:-1'>Fiets Club Flahute</span>
        </td>
        <td>Manitowoc, WI</td>
        <td>206.60</td>
    </tr>
    <tr class='licensenormalmiddle'>
        <td>3</td>
        <td>Paul Warloski</td>
        <td>
            <span class='font-size:-1'>Ben's Cycle/Milwaukee Bicycle Co. Cycling Team</span>
        </td>
        <td>Greendale, WI</td>
        <td>207.54</td>
    </tr>
</table>
`);

  data = cheerio.load(`
    	<script language='javascript' type='text/javascript' src='/myusac/js/stupidtable.min.js'></script>
		<script>
		function toggle_riders(race)
		{
			var a = document.getElementById('a_'+race);
			var ap = document.getElementById('ap_'+race);
			var tr = document.getElementById('tr_'+race);
			if (a.innerHTML == 'Show Rider List')
			{
				$.post("/myusac/include/registration.php", {pagename:"registration",mode:"riders",race:race}, riders_cb);
				tr.style.display = 'table-row';
				var div = document.getElementById('div_'+race);
				if (div != null) { div.innerHTML = "<table width='100%'><tr><td><blink><b><i>Loading...</i></b></blink></td></tr></table>"; }
				a.innerHTML = 'Hide Rider List';
			}
			else
			{
				tr.style.display = 'none';
				a.innerHTML = 'Show Rider List';
			}
			ap.innerHTML = 'Show Race Predictor';
		}
		function toggle_predictor(race)
		{
			var a = document.getElementById('a_'+race);
			var ap = document.getElementById('ap_'+race);
			var tr = document.getElementById('tr_'+race);
			if (ap.innerHTML == 'Show Race Predictor')
			{
				$.post("/myusac/include/registration.php", {pagename:"registration",mode:"predictor",race:race}, riders_cb);
				tr.style.display = 'table-row';
				var div = document.getElementById('div_'+race);
				if (div != null) { div.innerHTML = "<table width='100%'><tr><td><blink><b><i>Loading...</i></b></blink></td></tr></table>"; }
				ap.innerHTML = 'Hide Race Predictor';
			}
			else
			{
				tr.style.display = 'none';
				ap.innerHTML = 'Show Race Predictor';
			}
			a.innerHTML = 'Show Rider List';
		}
		function riders_cb(data)
		{
			var id = data.substring(0,data.indexOf(':')).replace(/^\s+/,'');
			var div = document.getElementById('div_'+id);
			if (div != null) { div.innerHTML = data.substring(data.indexOf(':')+1); }
			if ($('#reg_'+id).length > 0) { $('#reg_'+id).stupidtable(); }
		}
		</script>
		<table align='center' width='650' border='0' cellspacing='0' cellpadding='4'>
		<tr><td align='center'><br><b>Current registrations for Flyover Silver Creek</b><br><br></td></tr>
		
			<tr><td>
			<table width='100%' style='background-color: #003366;color: #ffffff'><tr><td>Sat 9/30/17</td><td>Cyclo-cross</td><td>Mixed</td><td>Masters 35+ Cat 1/2/3</td></tr></table>
			</td></tr>
			<tr id='tr_197018' style='display:none'>
			<td class='licensenormalmiddle' id='div_197018'></td></tr>
			<tr class='licensenormalmiddle'><td style='text-align:center'>
			<span style='float:left'>
			<a id='a_197018' href='javascript:toggle_riders(197018)'>Show Rider List</a>
			</span>
			<a id='ap_197018' href='javascript:toggle_predictor(197018)'>Show Race Predictor</a>
			<span style='float:right'><b>Riders: 1</b></span></td>
			</tr>
			<tr><td><font size='-2'>&nbsp;</font></td></tr>
			
			<tr><td>
			<table width='100%' style='background-color: #003366;color: #ffffff'><tr><td>Sat 9/30/17</td><td>Cyclo-cross</td><td>Mixed</td><td>Masters 50+ Cat 1/2/3</td></tr></table>
			</td></tr>
			<tr id='tr_197019' style='display:none'>
			<td class='licensenormalmiddle' id='div_197019'></td></tr>
			<tr class='licensenormalmiddle'><td style='text-align:center'>
			<span style='float:left'>
			<a id='a_197019' href='javascript:toggle_riders(197019)'>Show Rider List</a>
			</span>
			<a id='ap_197019' href='javascript:toggle_predictor(197019)'>Show Race Predictor</a>
			<span style='float:right'><b>Riders: 3</b></span></td>
			</tr>
			<tr><td><font size='-2'>&nbsp;</font></td></tr>
			
			<tr><td>
			<table width='100%' style='background-color: #003366;color: #ffffff'><tr><td>Sat 9/30/17</td><td>Cyclo-cross</td><td>Mixed</td><td>Masters 35+ Cat 4/5</td></tr></table>
			</td></tr>
			<tr id='tr_197007' style='display:none'>
			<td class='licensenormalmiddle' id='div_197007'></td></tr>
			<tr class='licensenormalmiddle'><td style='text-align:center'>
			<span style='float:left'>
			<a id='a_197007' href='javascript:toggle_riders(197007)'>Show Rider List</a>
			</span>
			<a id='ap_197007' href='javascript:toggle_predictor(197007)'>Show Race Predictor</a>
			<span style='float:right'><b>Riders: 3</b></span></td>
			</tr>
			<tr><td><font size='-2'>&nbsp;</font></td></tr>
			
			<tr><td>
			<table width='100%' style='background-color: #003366;color: #ffffff'><tr><td>Sat 9/30/17</td><td>Cyclo-cross</td><td>Mixed</td><td>Masters 50+ Cat 4/5</td></tr></table>
			</td></tr>
			<tr id='tr_197008' style='display:none'>
			<td class='licensenormalmiddle' id='div_197008'></td></tr>
			<tr class='licensenormalmiddle'><td style='text-align:center'>
			<span style='float:left'>
			<a id='a_197008' href='javascript:toggle_riders(197008)'>Show Rider List</a>
			</span>
			<a id='ap_197008' href='javascript:toggle_predictor(197008)'>Show Race Predictor</a>
			<span style='float:right'><b>Riders: 1</b></span></td>
			</tr>
			<tr><td><font size='-2'>&nbsp;</font></td></tr>
			
			<tr><td>
			<table width='100%' style='background-color: #003366;color: #ffffff'><tr><td>Sat 9/30/17</td><td>Cyclo-cross</td><td>Mixed</td><td>Singlespeed</td></tr></table>
			</td></tr>
			<tr id='tr_197021' style='display:none'>
			<td class='licensenormalmiddle' id='div_197021'></td></tr>
			<tr class='licensenormalmiddle'><td style='text-align:center'>
			<span style='float:left'>
			<a id='a_197021' href='javascript:toggle_riders(197021)'>Show Rider List</a>
			</span>
			<a id='ap_197021' href='javascript:toggle_predictor(197021)'>Show Race Predictor</a>
			<span style='float:right'><b>Riders: 1</b></span></td>
			</tr>
			<tr><td><font size='-2'>&nbsp;</font></td></tr>
			
			<tr><td>
			<table width='100%' style='background-color: #003366;color: #ffffff'><tr><td>Sat 9/30/17</td><td>Cyclo-cross</td><td>Women</td><td>Junior 9-14</td></tr></table>
			</td></tr>
			<tr id='tr_197015' style='display:none'>
			<td class='licensenormalmiddle' id='div_197015'></td></tr>
			<tr class='licensenormalmiddle'><td style='text-align:center'>
			<span style='float:left'>
			<a id='a_197015' href='javascript:toggle_riders(197015)'>Show Rider List</a>
			</span>
			<a id='ap_197015' href='javascript:toggle_predictor(197015)'>Show Race Predictor</a>
			<span style='float:right'><b>Riders: 2</b></span></td>
			</tr>
			<tr><td><font size='-2'>&nbsp;</font></td></tr>
			
			<tr><td>
			<table width='100%' style='background-color: #003366;color: #ffffff'><tr><td>Sat 9/30/17</td><td>Cyclo-cross</td><td>Women</td><td>Masters 35+ Cat 1/2/3/4/5</td></tr></table>
			</td></tr>
			<tr id='tr_197012' style='display:none'>
			<td class='licensenormalmiddle' id='div_197012'></td></tr>
			<tr class='licensenormalmiddle'><td style='text-align:center'>
			<span style='float:left'>
			<a id='a_197012' href='javascript:toggle_riders(197012)'>Show Rider List</a>
			</span>
			<a id='ap_197012' href='javascript:toggle_predictor(197012)'>Show Race Predictor</a>
			<span style='float:right'><b>Riders: 1</b></span></td>
			</tr>
			<tr><td><font size='-2'>&nbsp;</font></td></tr>
			
		</table>
		<br>
		`);

  races = [];
  racers = [];
  componentWillMount() {
    const raceTables = this.data('table').find('td').find('table');
    const racerRows = this.prediction('table').find('tr').slice(1);

    raceTables.each((i, r) => {
      const gender = this.data(r).find('td:nth-child(3)').text();
      const race = this.data(r).find('td:nth-child(4)').text();
      const id = this.data(r).parent().parent().next().attr('id').substring(3);
      this.races.push(`${gender} - ${race} - ${id}`);
    });

    racerRows.each((i, r) => {
      this.racers.push({
        rank: this.data(r).find('td:nth-child(1)').text(),
        name: this.data(r).find('td:nth-child(2)').text(),
        location: this.data(r).find('td:nth-child(4)').text(),
        points: this.data(r).find('td:nth-child(5)').text(),
      })
    });
  }

  render() {
    return (<span>
      {this.races.map(r => <Panel header={r}>
        <Table striped bordered condensed hover responsive >
          <thead>
          <tr>
            <th>Points</th>
            <th>Name</th>
            <th className="hidden-xs">Location</th>
          </tr>
          </thead>
          <tbody>
          {this.racers.map(racer =>
            <tr>
              <td>{racer.points}</td>
              <td>{racer.name}</td>
              <td className="hidden-xs">{racer.location}</td>
            </tr>)}
          </tbody>
        </Table>

      </Panel>)}
      </span>
    );
  }
}
