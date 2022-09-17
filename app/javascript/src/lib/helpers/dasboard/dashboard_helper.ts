import { Dashboard, Layout, Widget } from "@/types/dashboard";

export function applyDashboardLayout(dashboard: Dashboard, layout: Layout) {
  const clonedDashboard = JSON.parse(JSON.stringify(dashboard)) as Dashboard;

  const modifedWidgets: Widget[] = layout.map((widgetLayout) => {
    const targetWidget = dashboard.widgets.find(
      (widget) => String(widget.id) === widgetLayout.i
    ) as Widget;

    return {
      ...targetWidget,
      x: widgetLayout.x,
      y: widgetLayout.y,
      h: widgetLayout.h,
      w: widgetLayout.w,
    };
  });
  clonedDashboard.widgets = modifedWidgets;
  return clonedDashboard;
}
