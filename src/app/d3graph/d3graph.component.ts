import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-d3graph',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.scss']
})
export class D3graphComponent implements OnInit {
  public data = [];

  private svg;
  private margin = 30;
  private width = 290;
  private height = 290;
  private radius = Math.min(this.width, this.height) / 2  - this.margin;
  private colors;


  constructor(public dataService : DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.data = data;
      this.createSvg();
      this.createColors();
      this.drawChart();
    });

}

  private createSvg(): void {
    this.svg = d3.select('figure#pie')
    .append('svg')
    .attr('width', this.width)
    .attr('height', this.height)
    .append('g')
    .attr(
      'transform',
      'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
    );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(d => d.budget.toString()))
    .range(['#F1C40F',
    '#FF5733',
    '#F08080',
    '#5DADE2',
    '#196F3D',
    '#E74C3C',
    '#FA8072'
   ]);
  }

  private drawChart(): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.budget));

    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d, i) => (this.colors(i)))
    .attr('stroke', '#121926')
    .style('stroke-width', '1px');

    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('text')
    .text(d => d.data.title)
    .attr('transform', d => 'translate(' + labelLocation.centroid(d) + ')')
    .style('text-anchor', 'middle')
    .style('font-size', 15);
  }

}
