import { WidgetLayout, Layout } from "@/types/dashboard";

export function applyDashboardLayout(
  widgetLayouts: WidgetLayout[],
  layout: Layout
) {
  return layout.map((widgetLayout) => {
    const targetWidget = widgetLayouts.find(
      (widget) => String(widget.id) === widgetLayout.i
    );

    if (!targetWidget) throw "widget not found";

    return {
      ...targetWidget,
      x: widgetLayout.x,
      y: widgetLayout.y,
      h: widgetLayout.h,
      w: widgetLayout.w,
    };
  });
}
